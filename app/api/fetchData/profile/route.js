import client from "@/db";
import { NextResponse } from "next/server";

async function toJSON(body) {
  const reader = body.getReader(); // `ReadableStreamDefaultReader`
  const decoder = new TextDecoder();
  const chunks = [];

  async function read() {
    const { done, value } = await reader.read();

    // all chunks have been read?
    if (done) {
      return JSON.parse(chunks.join(""));
    }

    const chunk = decoder.decode(value, { stream: true });
    chunks.push(chunk);
    return read(); // read the next chunk
  }

  return read();
}

export async function POST(req, res) {
  try {
    const requestData = await toJSON(req.body);
    const data = JSON.parse(requestData["query"]);

    const id = data.ID;

    const myDB = client.db("Technova");
    const myColl = myDB.collection("students");

    const options = {
      projection: { _id: id, field1: 1 },
    };
    const findResult = await myColl.findOne({ _id: id });

    // Get all admins using Prisma
    // console.log("document", findResult);


    // console.log('docment',doc);

    return NextResponse.json(findResult, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get admins" },
      {
        status: 500,
      }
    );
  }
}
