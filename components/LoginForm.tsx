"use client";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form"; // Ajuste o caminho conforme necessário

type LoginFormInputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const form = useForm<LoginFormInputs>();

  return (
    <div className=" flex min-h-screen items-center justify-center bg-transparent">
      <div className="m-2 w-full max-w-md space-y-6 rounded-[30px] bg-white px-[60px] py-[70px] shadow-lg">
        <h2 className="mb-[50px] text-center text-[20px] font-semibold text-black">로그인</h2>

        <Form {...form}>
          <form className="space-y-6">
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
                      className="w-full border-b border-gray-300 px-3 py-2 text-[14px] focus:border-gray-600 focus:outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-start text-sm">
              <Link href="/forgot-password" className="text-black underline">
                비밀번호 찾기
              </Link>
            </div>

            <div className="flex justify-center">
              <button
                type="button"
                className="min-w-[210px] rounded-[30px] bg-customBege py-3 text-center text-black hover:bg-gray-300 focus:outline-none"
              >
                로그인
              </button>
            </div>

            <div className="text-center text-sm text-gray-700">
              계정이 없나요?{" "}
              <Link href="/register" className=" text-gray-700 underline">
                회원가입
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
