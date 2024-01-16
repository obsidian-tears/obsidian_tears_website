import { Injectable } from "@angular/core";

@Injectable({
	providedIn: 'root',
})
export class SwiperService {

  private readonly gameImages = [
    'assets/img/carrousel/game/game1.jpg',
    'assets/img/carrousel/game/game2.png',
    'assets/img/carrousel/game/game4.jpg',
    'assets/img/carrousel/game/game3.jpg',
    'assets/img/carrousel/game/game-over.png',
    'assets/img/carrousel/game/shall-we-play-a-game.jpg',
    'assets/img/carrousel/game/game5.jpg'
  ];

  private readonly artifactImages = [
    'assets/img/carrousel/artifact/artifact1.png',
    'assets/img/carrousel/artifact/artifact2.png',
    'assets/img/carrousel/artifact/artifact3.png',
    'assets/img/carrousel/artifact/artifact4.png',
    'assets/img/carrousel/artifact/artifact5.png',
    'assets/img/carrousel/artifact/artifact6.png',
    'assets/img/carrousel/artifact/artifact7.png',
    'assets/img/carrousel/artifact/artifact8.png'
  ];

  getGameImages(): string[] {
    return this.gameImages.slice();
  }

  getArtifactImages(): string[] {
    return this.artifactImages.slice();
  }

}
