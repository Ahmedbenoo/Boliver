export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      site_settings: {
        Row: {
          id: string;
          key: string;
          value: Json;
          updated_at: string;
        };
        Insert: {
          id?: string;
          key: string;
          value: Json;
          updated_at?: string;
        };
        Update: {
          id?: string;
          key?: string;
          value?: Json;
          updated_at?: string;
        };
      };
      hero_section: {
        Row: {
          id: string;
          content: Json;
          is_published: boolean;
          updated_at: string;
        };
        Insert: {
          id?: string;
          content: Json;
          is_published?: boolean;
          updated_at?: string;
        };
        Update: {
          id?: string;
          content?: Json;
          is_published?: boolean;
          updated_at?: string;
        };
      };
      clients: {
        Row: {
          id: string;
          name: string;
          logo_url: string;
          website_url: string | null;
          sort_order: number;
          is_published: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          logo_url: string;
          website_url?: string | null;
          sort_order?: number;
          is_published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          logo_url?: string;
          website_url?: string | null;
          sort_order?: number;
          is_published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      services: {
        Row: {
          id: string;
          slug: string;
          title: string;
          description: string;
          icon: string;
          features: Json;
          featured: boolean;
          sort_order: number;
          is_published: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          description: string;
          icon: string;
          features?: Json;
          featured?: boolean;
          sort_order?: number;
          is_published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          description?: string;
          icon?: string;
          features?: Json;
          featured?: boolean;
          sort_order?: number;
          is_published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      portfolio_projects: {
        Row: {
          id: string;
          slug: string;
          title: string;
          client: string;
          category: string;
          excerpt: string;
          cover_image: string;
          gallery: Json;
          technologies: Json;
          results: Json;
          featured: boolean;
          is_published: boolean;
          published_at: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          client: string;
          category: string;
          excerpt: string;
          cover_image: string;
          gallery?: Json;
          technologies?: Json;
          results?: Json;
          featured?: boolean;
          is_published?: boolean;
          published_at?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          client?: string;
          category?: string;
          excerpt?: string;
          cover_image?: string;
          gallery?: Json;
          technologies?: Json;
          results?: Json;
          featured?: boolean;
          is_published?: boolean;
          published_at?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      blog_posts: {
        Row: {
          id: string;
          slug: string;
          title: string;
          excerpt: string;
          content: string;
          cover_image: string;
          author: string;
          category: string;
          read_time: string;
          is_published: boolean;
          published_at: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          excerpt: string;
          content: string;
          cover_image: string;
          author: string;
          category: string;
          read_time: string;
          is_published?: boolean;
          published_at?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          excerpt?: string;
          content?: string;
          cover_image?: string;
          author?: string;
          category?: string;
          read_time?: string;
          is_published?: boolean;
          published_at?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}

export type Tables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Row"];

export type TablesInsert<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Insert"];

export type TablesUpdate<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Update"];
