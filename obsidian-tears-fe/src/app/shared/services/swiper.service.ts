import { Injectable } from "@angular/core";
import { Governance } from "../../components/layout/main/governance-component/models/governance.model.interface";

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

  private readonly governances: Governance[] = [
    {
      title: 'Overview',
      firstContent: 'It is Obsidian Tear’s mission to provide tools to its community members that allow them the power to influence any changes to the game’s source code, art assets, narrative and story, or any other aspect of video game development.',
    },
    {
      title: 'Decentralization Overview',
      firstContent: 'For the beginning months following the Chapter 1 release, areas of allowed development proposals will be limited to only a few sections:',
      numberContent:
        [
          'Weapons / Artifacts / Armor / Spell Scroll NFTs;',
          'Sprites, Monsters and Animations (NPC\’s, Tile Art, Trees, Paths, Homes, etc..);',
          'Quests and NPC dialogue-player interactions;'
        ],
      secondContent: 'As time progresses, additional options and availability will be open to community members to submit and propose changes in more parts of the game’s development.'
    },
    {
      title: 'Technical Skills Overview',
      firstContent: 'Community members who submit proposals do not need the technical skills to create and implement those proposals themselves. When a proposal is accepted, the assets or changes in question may either be created by developers or, if desired, by the applicant themself.',
    },
    {
      title: 'Process For Proposal Submissions Overview',
      numberContent:
        [
          'Join our Discord;',
          'View the Open-Source-Submissions category, and choose the channel that corresponds to your proposal;',
          'Inside the corresponding channel, make a proposal via written text and tag an admin (@admin). Your proposal should list:'
        ],
      letterContent:
        [
          'If it is a new asset or an improvement of an existing asset;',
          'A pitch to the developers and community of why it should be included;',
          'If the asset/change in question is one that will be created by yourself or requisitioned of the development team;',
          'The amount of time needed to make/change the asset (if the member is creating it);'
        ],
    },
  ];

  public getGameImages(): string[] {
    return this.gameImages.slice();
  }

  public getArtifactImages(): string[] {
    return this.artifactImages.slice();
  }

  public getGovernances(): Governance[] {
    return [...this.governances];
  }

}
