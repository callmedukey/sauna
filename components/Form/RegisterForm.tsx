"use client";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

import { registerUserAction } from "@/app/actions/registerUserAction"; // Ajuste o caminho para a action
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form"; // Ajuste o caminho conforme necessário

type RegisterFormInputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterForm = () => {
  const form = useForm<RegisterFormInputs>();

  const onSubmit = async (data: RegisterFormInputs) => {
    const response = await registerUserAction(data);

    if (response.success) {
      alert("Registration successful!");
      // Redirecione para a página de login ou dashboard
      // router.push("/login");
    } else {
      alert(response.error || "Registration failed!");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-transparent">
      <div className="m-2 w-full max-w-[800px] space-y-6 rounded-[30px] bg-white px-[50px] py-[100px] shadow-lg">
        <h2 className="mb-[50px] text-center text-[20px] font-semibold text-black">회원 가입</h2>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 text-black"
          >
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <input
                      type="email"
                      placeholder="이메일"
                      {...field}
                      className="w-full border-b border-gray-300 px-3 py-2 text-[14px] focus:border-gray-600 focus:outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <input
                      type="password"
                      placeholder="비밀번호"
                      {...field}
                      className="w-full min-w-[500px] border-b border-gray-300 px-3 py-2 text-[14px] focus:border-gray-600 focus:outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="confirmPassword"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <input
                      type="password"
                      placeholder="비밀번호 확인"
                      {...field}
                      className="w-full min-w-[500px] border-b border-gray-300 px-3 py-2 text-[14px] focus:border-gray-600 focus:outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-center">
              <button
                type="submit"
                className="min-w-[210px] rounded-[30px] bg-customBege py-3 text-center text-black hover:bg-gray-300 focus:outline-none"
              >
                다음
              </button>
            </div>

            <div className="text-center text-sm text-gray-700">
              벌써 회원가입하셨나요?{" "}
              <Link href="/login" className="text-gray-700 underline">
                로그인
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default RegisterForm;
