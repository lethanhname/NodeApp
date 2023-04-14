import express from "express";

export interface BaseRequest extends express.Request {
  userId: string;
}
