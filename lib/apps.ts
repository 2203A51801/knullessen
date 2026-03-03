import crypto from "crypto";
import { db } from "./db";

export type AppRow = {
  id: string;
  name: string;
  description: string;
  download_url: string;
  created_at: string;
};

export async function listApps(): Promise<AppRow[]> {
  const rs = await db.execute("SELECT * FROM apps ORDER BY created_at DESC");
  return rs.rows as unknown as AppRow[];
}

export async function getApp(id: string): Promise<AppRow | null> {
  const rs = await db.execute({
    sql: "SELECT * FROM apps WHERE id = ? LIMIT 1",
    args: [id],
  });
  return (rs.rows[0] as unknown as AppRow) ?? null;
}

export async function createApp(input: {
  name: string;
  description: string;
  download_url: string;
}): Promise<AppRow> {
  const id = crypto.randomUUID();
  const now = new Date().toISOString();

  await db.execute({
    sql: `INSERT INTO apps (id, name, description, download_url, created_at)
          VALUES (?, ?, ?, ?, ?)`,
    args: [id, input.name, input.description, input.download_url, now],
  });

  return { id, created_at: now, ...input };
}

export async function updateApp(
  id: string,
  input: { name: string; description: string; download_url: string }
): Promise<void> {
  await db.execute({
    sql: `UPDATE apps
          SET name = ?, description = ?, download_url = ?
          WHERE id = ?`,
    args: [input.name, input.description, input.download_url, id],
  });
}

export async function deleteApp(id: string): Promise<void> {
  await db.execute({
    sql: "DELETE FROM apps WHERE id = ?",
    args: [id],
  });
}