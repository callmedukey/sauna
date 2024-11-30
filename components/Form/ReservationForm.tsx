  "use client";

  import React from "react";
  import { useForm } from "react-hook-form";

  import {
    Form,
    FormField,
    FormItem,
    FormControl,
    FormMessage,
  } from "@/components/ui/form"; // Ajuste o caminho conforme necessário

  type ReservationFormInputs = {
    name: string;
    phone: string;
    email: string;
    password: string;
    confirmPassword: string;
  };

  const ReservationForm = () => {
    const form = useForm<ReservationFormInputs>();

    return (
      <div className="flex min-h-screen items-center justify-center bg-transparent">
        <div className="my-[50px] w-full max-w-md space-y-6 rounded-[30px] bg-[#f8f8f8] p-[50px] shadow-md">
          <h2 className="mb-[30px] text-center text-[18px] font-medium text-black">나의 정보</h2>

          <Form {...form}>
            <form className="space-y-6">
              {/* Campo de Nome */}
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between">
                    <label className="mr-4 w-[100px] text-[14px] font-normal text-gray-800">이름</label>
                    <FormControl>
                      <input
                        type="text"
                        {...field}
                        className="w-full max-w-[250px] border-b border-gray-300 bg-transparent px-1 py-2 text-[14px] focus:border-gray-600 focus:outline-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Campo de Telefone */}
              <FormField
                name="phone"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between">
                    <label className="mr-4 w-[100px] text-[14px] font-normal text-gray-800">전화번호</label>
                    <FormControl>
                      <input
                        type="text"
                        {...field}
                        className="w-full max-w-[250px] border-b border-gray-300 bg-transparent px-1 py-2 text-[14px] focus:border-gray-600 focus:outline-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Campo de Email */}
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between">
                    <label className="mr-4 w-[100px] text-[14px] font-normal text-gray-800">이메일</label>
                    <FormControl>
                      <input
                        type="email"
                        {...field}
                        className="w-full max-w-[250px] border-b border-gray-300 bg-transparent px-1 py-2 text-[14px] focus:border-gray-600 focus:outline-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Campo de Senha */}
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between">
                    <label className="mr-4 w-[100px] text-[14px] font-normal text-gray-800">비밀번호</label>
                    <FormControl>
                      <input
                        type="password"
                        {...field}
                        className="w-full max-w-[250px] border-b border-gray-300 bg-transparent px-1 py-2 text-[14px] focus:border-gray-600 focus:outline-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Campo de Confirmação de Senha */}
              <FormField
                name="confirmPassword"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between whitespace-nowrap">
                    <label className="mr-4 w-[100px] text-[14px] font-normal text-gray-800">비밀번호 확인</label>
                    <FormControl>
                      <input
                        type="password"
                        {...field}
                        className="w-full max-w-[300px] border-b border-gray-300 bg-transparent p-1 text-[14px] focus:border-gray-600 focus:outline-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Botão de Submissão */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="min-w-[200px] rounded-[30px] bg-white py-3 text-center text-gray-800 hover:bg-gray-300 focus:outline-none"
                >
                  수정 하기
                </button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    );
  };

  export default ReservationForm;
