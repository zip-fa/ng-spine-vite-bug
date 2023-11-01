import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import {
  AssetManager,
  SceneRenderer
} from '@esotericsoftware/spine-webgl';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-spine-vite-bug';

  constructor() {
    const ctx = null as unknown as WebGLRenderingContext;
    const canvas = null as unknown as HTMLCanvasElement;

    const assetManager = new AssetManager(ctx);
    const sceneRenderer = new SceneRenderer(canvas, ctx);
  }
}
