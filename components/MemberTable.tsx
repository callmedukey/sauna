"use client";

import React, { useState } from "react";

import PointEditForm from "@/components/PointEditForm"; // Adjust the path to your form
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Member {
  id: number;
  name: string;
  phone: string;
  email: string;
  points: string;
}

const MemberManagementTable = () => {
  const [members, setMembers] = useState<Member[]>([
    {
      id: 1,
      name: "홍길동",
      phone: "010-1234-5678",
      email: "hongg@naver.com",
      points: "3000P",
    },
    {
      id: 2,
      name: "김철수",
      phone: "010-9876-5432",
      email: "kimcs@naver.com",
      points: "5000P",
    },
  ]);

  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  // Handle delete action
  const handleDelete = (id: number) => {
    const updatedMembers = members.filter((member) => member.id !== id);
    setMembers(updatedMembers);
  };

  // Handle edit button click
  const handleEditClick = (member: Member) => {
    setSelectedMember(member);
  };

  return (
    <div className="mx-auto mt-12 w-full max-w-[950px] px-4">
      <h1 className="mb-6 text-start text-xl font-bold sm:text-2xl">회원 관리</h1>

      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <Table className="w-full min-w-[700px] sm:w-auto">
            <TableHeader className="border-b-2 border-black">
              <TableRow>
                <TableHead className="text-center text-[12px] sm:text-[15px]">
                  이름
                </TableHead>
                <TableHead className="text-center text-[12px] sm:text-[15px]">
                  전화 번호
                </TableHead>
                <TableHead className="text-center text-[12px] sm:text-[15px]">
                  이메일
                </TableHead>
                <TableHead className="text-center text-[12px] sm:text-[15px]">
                  보유 포인트
                </TableHead>
                <TableHead className="text-center text-[12px] sm:text-[15px]">
                  작업
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="bg-white">
              {members.map((member) => (
                <TableRow key={member.id}>
                  <TableCell className="text-center text-[10px] sm:text-[12px]">
                    {member.name}
                  </TableCell>
                  <TableCell className="text-center text-[10px] sm:text-[12px]">
                    {member.phone}
                  </TableCell>
                  <TableCell className="text-center text-[10px] sm:text-[12px]">
                    {member.email}
                  </TableCell>
                  <TableCell className="text-center text-[10px] sm:text-[12px]">
                    {member.points}
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex justify-center gap-2">
                      {/* 포인트 수정 Dialog */}
                      <Dialog>
                        <DialogTrigger asChild>
                          <button
                            className="h-[40px] w-[90px] rounded bg-black text-[12px] text-white"
                            onClick={() => handleEditClick(member)}
                          >
                            포인트 수정
                          </button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle></DialogTitle>
                          </DialogHeader>
                          <PointEditForm />
                        </DialogContent>
                      </Dialog>
                      {/* 삭제 Button */}
                      <button
                        onClick={() => handleDelete(member.id)}
                        className="h-[40px] w-[90px] rounded bg-red-500 text-[12px] text-white hover:bg-red-700"
                      >
                        삭제
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default MemberManagementTable;
