import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UsuariosService } from './users.service';
import { UsuariosModel } from './user.model';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  create(@Body() newUser: UsuariosModel) {
    return this.usuariosService.addUsuario(newUser);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosService.getUsuarioById(+id);
  }

  @Get()
  findAll() {
    return this.usuariosService.getUsuarios();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUser: UsuariosModel) {
    return this.usuariosService.updateUsuario(+id, updateUser);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.deleteUsuario(+id);
  }
}