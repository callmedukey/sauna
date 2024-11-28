"use client";

import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Notice = {
  id: number;
  title: string;
  content: string;
  date: string;
};

const AnnouncementTable = () => {
  const [notices, setNotices] = useState<Notice[]>([]);

  // Fetch notices on component mount (simulated with mock data)
  useEffect(() => {
    const mockFetchNotices = async () => {
      // Simulated data
      const fetchedNotices: Notice[] = [
        { id: 1, title: "공지사항 1", content: "내용 1", date: new Date().toISOString() },
        { id: 2, title: "공지사항 2", content: "내용 2", date: new Date().toISOString() },
      ];
      setNotices(fetchedNotices);
    };
    mockFetchNotices();
  }, []);

  // Form setup
  const form = useForm<{ title: string; content: string }>();
  const onSubmit = (data: { title: string; content: string }) => {
    const newNotice: Notice = {
      id: notices.length + 1,
      title: data.title,
      content: data.content,
      date: new Date().toISOString(),
    };
    setNotices((prev) => [...prev, newNotice]);
    alert("Notice saved successfully!");
    form.reset();
  };

  return (
    <div className="mx-auto mt-12 w-full max-w-[950px] px-4">
      {/* Title */}
      <h1 className="mb-6 text-start text-xl font-bold sm:text-2xl">공지 사항</h1>

      {/* Table */}
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <Table className="w-full min-w-[700px] sm:w-auto">
            <TableHeader className="border-b-2 border-black">
              <TableRow>
                <TableHead className="px-4 py-2 text-center text-sm">번호</TableHead>
                <TableHead className="px-4 py-2 text-center text-sm">제목</TableHead>
                <TableHead className="px-4 py-2 text-center text-sm">날짜</TableHead>
                <TableHead className="px-4 py-2 text-center text-sm">작업</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="bg-white">
              {notices.map((notice, index) => (
                <TableRow key={notice.id} className="gap-4 border-b sm:gap-8">
                  <TableCell className="px-4 py-2 text-center text-sm">{index + 1}</TableCell>
                  <TableCell className="px-4 py-2 text-center text-sm">{notice.title}</TableCell>
                  <TableCell className="px-4 py-2 text-center text-sm">
                    {new Date(notice.date).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="px-4 py-2 text-center">
                    <button
                      className="rounded bg-red-500 px-4 py-1 text-white"
                      onClick={() => {
                        setNotices((prev) => prev.filter((n) => n.id !== notice.id));
                        alert("Notice deleted successfully!");
                      }}
                    >
                      삭제
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* 글 작성 Button */}
      <div className="mt-6 flex justify-end">
        <Dialog>
          <DialogTrigger className="rounded bg-black px-6 py-3 text-white hover:bg-gray-800 focus:outline-none">
              글 작성
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>공지 작성</DialogTitle>
            </DialogHeader>
            {/* Ensure FormProvider wraps the form */}
            <FormProvider {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {/* Title Field */}
                <FormField
                  name="title"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <label className="block text-sm font-medium">제목</label>
                      <FormControl>
                        <input
                          type="text"
                          {...field}
                          className="w-full border border-gray-300 px-2 py-1"
                          placeholder="제목을 입력하세요"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Content Field */}
                <FormField
                  name="content"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <label className="block text-sm font-medium">내용</label>
                      <FormControl>
                        <textarea
                          rows={4}
                          {...field}
                          className="w-full border border-gray-300 px-2 py-1"
                          placeholder="내용을 입력하세요"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Submit Button */}
                <button
                  type="submit"
                  className="rounded bg-gray-800 px-4 py-2 text-white"
                >
                  저장
                </button>
              </form>
            </FormProvider>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AnnouncementTable;