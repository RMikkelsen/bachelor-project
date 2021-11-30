import create from "zustand";
import { persist } from "zustand/middleware";
import { IYoutubeItem } from "./components/youtube/youtube-main";

export type Video = {
  video: string;
  isFavorite?: boolean;
};

export type VideoState = {
  videos: Array<IYoutubeItem>;
  addVideo: (video: IYoutubeItem) => void;
  removeVideo: (index: number) => void;
  // toggleFavorite: (index: number) => void;
};

export const useVideoStore = create(
  persist(
    (set) => ({
      videos: [],
      addVideo: (video: IYoutubeItem) => {
        if (!video) return;
        set((state: VideoState) => ({
          videos: [...state.videos, { ...video }],
        }));
      },

      removeVideo: (index: number) =>
        set((state: VideoState) => ({
          videos: state.videos.filter((_video, id) => id !== index),
        })),
      // toggleFavorite: (index: number) =>
      //   set((state: VideoState) => ({
      //     videos: state.videos.map((video, id) => {
      //       if (index !== id) {
      //         return video;
      //       }
      //       return { ...video, isFavorite: !video.isFavorite };
      //     }),
      //   })),
    }),
    { name: "videos" }
  )
);

export default useVideoStore;
