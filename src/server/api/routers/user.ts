import { z } from "zod";
import User from "~/models/Users";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const userRouter = createTRPCRouter({
  register: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      if (!process.env.JWT_SECRET) throw new Error("JWT_SECRET not set");

      const { name, email, password } = input;

      let user = await User.findOne({ email });

      if (user) {
        throw new Error("User already exists");
      }

      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      user = await User.create({
        ...input,
        password: hashedPassword,
      });

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      return { token, user: { name, email } };
    }),
});
