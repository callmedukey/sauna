"use server";

import { prisma } from "@/lib/prisma";

export async function saveNoticeAction(data: { title: string; content: string }) {
  try {
    const notice = await prisma.notice.create({
      data: {
        title: data.title,
        content: data.content,
      },
    });
    return { success: true, notice };
  } catch (error) {
    console.error("Error saving notice:", error);
    return { success: false, error: error.message };
  }
}

export async function fetchNoticesAction() {
  try {
    const notices = await prisma.notice.findMany({
      orderBy: { date: "desc" },
    });
    return notices;
  } catch (error) {
    console.error("Error fetching notices:", error);
    return [];
  }
}
