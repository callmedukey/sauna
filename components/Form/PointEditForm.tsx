"use client";

import React from "react";
import { useForm } from "react-hook-form";

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form"; // Adjust path if needed

type PointEditFormInputs = {
  points: string;
};

const PointEditForm = () => {
  const form = useForm<PointEditFormInputs>({
    defaultValues: {
      points: "",
    },
  });

  const onSubmit = (data: PointEditFormInputs) => {
    console.log("Updated Points:", data.points);
    // Add your submission logic here
  };

  return (
    <div className="flex  items-center justify-center">
      <div className="w-full max-w-md rounded-lg bg-white p-6">
        <h2 className="mb-6 text-center text-xl font-medium text-gray-800">포인트 수정</h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Point Input Field */}
            <FormField
              name="points"
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <label className="mb-2 text-sm font-medium text-gray-700">
                    포인트 수정
                  </label>
                  <FormControl>
                    <input
                      type="text"
                      {...field}
                      placeholder="Enter new points"
                      className="w-full rounded border border-gray-300 px-4 py-2 text-sm focus:border-gray-500 focus:outline-none"
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
                className="w-full max-w-xs rounded bg-black py-2 text-sm font-medium text-white hover:bg-gray-800"
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

export default PointEditForm;
