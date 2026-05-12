import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { home } from './home/home';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer,home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portal');
}
