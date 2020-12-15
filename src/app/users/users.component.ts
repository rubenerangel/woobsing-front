import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  name: string;
  last_name: string;
  phone: string;
  email: string;
  address: string;

  usuarios = [];

  constructor(public _UsersService: UsersService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this._UsersService.obtenerUsuarios().subscribe(resp => {
      
      return this.usuarios = resp.usuarios;
    });
  }

  register() {
    const user = {
      name: this.name,
      last_name: this.last_name,
      phone: this.phone,
      email: this.email,
      address: this.address
    }

    this._UsersService.register(user).subscribe(data => {
      console.log(data);

      this.obtenerUsuarios();
    })
  }

  delete(id:string): void {
    this._UsersService.delete(id).subscribe(resp => {
      console.log(resp);
      this.obtenerUsuarios();
    });
  }
}
