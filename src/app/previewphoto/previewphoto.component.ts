import { Component } from '@angular/core';

@Component({
  selector: 'app-previewphoto',
  templateUrl: './previewphoto.component.html',
  styleUrls: ['./previewphoto.component.css']
})
export class PreviewphotoComponent {
  PhotoPath: string = '';
  showPreview = false;
  constructor() { }

  CheckPreview() { 
    this.showPreview = !this.showPreview;
  }
  ngOnInit(): void{
    
  }
  SendData(data: any) { }
  
}
