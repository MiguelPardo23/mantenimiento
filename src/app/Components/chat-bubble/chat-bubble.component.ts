import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrl: './chat-bubble.component.css'
})
export class ChatBubbleComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() { }

  openChat() {
    this.snackBar.open('¿Necesitas más información?', 'Chatea con nosotros', {
      duration: 5000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      panelClass: ['chat-bubble'],
    }).onAction().subscribe(() => {
      window.location.href = 'https://api.whatsapp.com/send?phone=XXXXXXXXXX&text=Hola%2C%20necesito%20más%20información';
    });
  }
  
}