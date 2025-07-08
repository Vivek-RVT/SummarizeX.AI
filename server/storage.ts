import { summaries, type Summary, type InsertSummary, users, type User, type InsertUser } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createSummary(summary: InsertSummary): Promise<Summary>;
  getSummary(id: number): Promise<Summary | undefined>;
  getRecentSummaries(limit?: number): Promise<Summary[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private summaries: Map<number, Summary>;
  private currentUserId: number;
  private currentSummaryId: number;

  constructor() {
    this.users = new Map();
    this.summaries = new Map();
    this.currentUserId = 1;
    this.currentSummaryId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createSummary(insertSummary: InsertSummary): Promise<Summary> {
    const id = this.currentSummaryId++;
    const summary: Summary = { 
      ...insertSummary, 
      id, 
      createdAt: new Date() 
    };
    this.summaries.set(id, summary);
    return summary;
  }

  async getSummary(id: number): Promise<Summary | undefined> {
    return this.summaries.get(id);
  }

  async getRecentSummaries(limit = 10): Promise<Summary[]> {
    const allSummaries = Array.from(this.summaries.values());
    return allSummaries
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, limit);
  }
}

export const storage = new MemStorage();
