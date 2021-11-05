import create from "zustand";
import { persist } from "zustand/middleware";

export type Video = {
  video?: string;
  isFavorite?: boolean;
};

export type VideoState = {
  videos: Array<Video>;
  addVideo: (text: string) => void;
  removeVideo: (index: number) => void;
  toggleFavorite: (index: number) => void;
};

export const useVideoStore = create<VideoState>((set) => ({
  videos: [],
  addVideo: (video: string) =>
    set((state) => ({ videos: [...state.videos, { video: video }] })),
  removeVideo: (index: number) =>
    set((state) => ({
      videos: state.videos.filter((video, id) => id !== index),
    })),
  toggleFavorite: (index: number) =>
    set((state) => ({
      videos: state.videos.map((video, id) => {
        if (index !== id) {
          return video;
        }
        return { ...video, isFavorite: !video.isFavorite };
      }),
    })),
}));

export default useVideoStore;
