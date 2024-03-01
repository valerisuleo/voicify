export interface IPhoto {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;

}

export interface ICardHomePage extends IPhoto {
    countUsers: string;
    countLikes: string;
    isLike: boolean;
    isHorizontal: boolean;
  }