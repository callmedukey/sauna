"use client";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form"; // Ajuste o caminho conforme necessário

type NewUserFormInputs = {
  name: string;
  phone: string;
  verificationCode: string;
  agreeToTerms: boolean;
};

const NewUserForm = () => {
  const form = useForm<NewUserFormInputs>();

  return (
    <div className=" flex min-h-screen items-center justify-center bg-transparent">
      <div className="my-[50px] w-full max-w-md space-y-6 rounded-[30px] bg-white p-[50px] shadow-lg">
        <h2 className="mb-[50px] text-center text-[20px] font-semibold text-black">회원 가입</h2>

        <Form {...form}>
          <form className="space-y-6">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <input
                      type="text"
                      placeholder="이름"
                      {...field}
                      className="w-full border-b border-gray-300 px-3 py-2 text-[14px] focus:border-gray-600 focus:outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="phone"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center space-x-4">
                    <FormControl>
                      <input
                        type="text"
                        placeholder="전화번호"
                        {...field}
                        className="w-full border-b border-gray-300 px-3 py-2 text-[14px] focus:border-gray-600 focus:outline-none"
                      />
                    </FormControl>
                    <button
                      type="button"
                      className=" whitespace-nowrap border bg-customBege p-2 text-[12px]  text-black"
                    >
                      인증 받기
                    </button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="verificationCode"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <input
                      type="text"
                      placeholder="인증 번호"
                      {...field}
                      className="w-full border-b border-gray-300 px-3 py-2 text-[14px] focus:border-gray-600 focus:outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="agreeToTerms"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      {...field}
                      checked={field.value} // Apenas `checked`, sem `value`
                      className="size-4 rounded border-gray-300 focus:ring-0"
                    />
                    <label className="text-sm text-gray-700">이용 약관 동의</label>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-center">
              <button
                type="button"
                className="min-w-[210px] rounded-[30px] bg-[#f5f5f5] py-3 text-center text-black hover:bg-gray-300 focus:outline-none"
              >
                완료
              </button>
            </div>

            <div className="text-center text-sm text-gray-700">
              벌써 회원가입하셨나요?{" "}
              <Link href="/login" className="font-semibold text-gray-900 hover:underline">
                로그인
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default NewUserForm;
