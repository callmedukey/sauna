"use client";

import React from "react";
import { useForm } from "react-hook-form";

import { saveReservationAction } from "@/app/actions/saveReservationAction";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form"; // Ajuste o caminho conforme necessário



type NewReserveFormInputs = {
  name: string;
  date: string;
  time: string;
  reservationNumber: string;
};

const NewReserveForm = () => {
  const form = useForm<NewReserveFormInputs>();

  const onSubmit = async (data: NewReserveFormInputs) => {
    const response = await saveReservationAction(data);

    if (response.success) {
      alert("Reservation saved successfully!");
      form.reset();
    } else {
      alert(`Error: ${response.error}`);
    }
  };

  return (
    <div className="flex  items-center justify-center bg-transparent">
      <div className="my-[50px] w-full max-w-sm space-y-6 rounded-[10px] bg-white ">
        <h2 className="mb-6 text-center text-lg font-medium text-black">
          예약 정보
        </h2>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            {/* Name Field */}
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <label className="mr-4 w-[80px] text-sm font-normal text-gray-800">
                    이름
                  </label>
                  <FormControl>
                    <input
                      type="text"
                      {...field}
                      className="w-full border-b border-gray-300 bg-transparent px-2 py-1 text-sm focus:border-gray-600 focus:outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Date Field */}
            <FormField
              name="date"
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <label className="mr-4 w-[80px] text-sm font-normal text-gray-800">
                    날짜
                  </label>
                  <FormControl>
                    <input
                      type="date"
                      {...field}
                      className="w-full border-b border-gray-300 bg-transparent px-2 py-1 text-sm focus:border-gray-600 focus:outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Time Field */}
            <FormField
              name="time"
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <label className="mr-4 w-[80px] text-sm font-normal text-gray-800">
                    시간
                  </label>
                  <FormControl>
                    <input
                      type="time"
                      {...field}
                      className="w-full border-b border-gray-300 bg-transparent px-2 py-1 text-sm focus:border-gray-600 focus:outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Reservation Number Field */}
            <FormField
              name="reservationNumber"
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <label className="mr-4 w-[80px] text-sm font-normal text-gray-800">
                    예약 번호
                  </label>
                  <FormControl>
                    <input
                      type="text"
                      {...field}
                      className="w-full border-b border-gray-300 bg-transparent px-2 py-1 text-sm focus:border-gray-600 focus:outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full rounded-lg bg-gray-800 py-2 text-center text-white hover:bg-gray-700 focus:outline-none"
              >
                저장
              </button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default NewReserveForm;
