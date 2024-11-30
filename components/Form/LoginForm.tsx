"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { loginUserAction } from "@/app/actions/loginUserAction"; // Ajuste o caminho para a action do servidor
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form"; // Ajuste o caminho conforme necessário



type LoginFormInputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const form = useForm<LoginFormInputs>();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onSubmit = async (data: LoginFormInputs) => {
    const response = await loginUserAction(data);

    if (response.success) {
      setSuccessMessage("Login successful! Redirecting...");
      // Você pode redirecionar para outra página após um curto intervalo
      setTimeout(() => {
        window.location.href = "/dashboard"; // Redirecione para o dashboard ou outra rota
      }, 2000);
    } else {
      setSuccessMessage(null); // Remove a mensagem de sucesso se o login falhar
      alert(response.error || "Invalid login credentials");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-transparent">
      <div className="m-2 w-full max-w-[800px] space-y-6 rounded-[30px] bg-white px-[60px] py-[100px] shadow-lg">
        <h2 className="mb-[50px] text-center text-[20px] font-semibold text-black">로그인</h2>

        {successMessage && (
          <div className="mb-4 rounded-lg bg-green-100 p-3 text-center text-green-700">
            {successMessage}
          </div>
        )}

        <Form {...form}>
          <form
            className="space-y-6 text-black"
            onSubmit={form.handleSubmit(onSubmit)}
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
                      className="w-full min-w-[400px] border-b border-gray-300 px-3 py-2 text-[14px] focus:border-gray-600 focus:outline-none"
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
                type="submit"
                className="min-w-[210px] rounded-[30px] bg-customBege py-3 text-center text-black hover:bg-gray-300 focus:outline-none"
              >
                로그인
              </button>
            </div>

            <div className="text-center text-sm text-gray-700">
              계정이 없나요?{" "}
              <Link href="/register" className="text-gray-700 underline">
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
