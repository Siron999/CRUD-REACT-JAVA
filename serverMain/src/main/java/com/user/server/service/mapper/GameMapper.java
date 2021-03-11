package com.user.server.service.mapper;

import com.user.server.entity.Game;
import com.user.server.service.Dto.GameDto;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public abstract class GameMapper implements EntityMapper<GameDto, Game> {

    //    @Mapping(target = "id", source = "id", ignore = true)
    public abstract Game toEntityDelegate(GameDto dto);

    //    @Mapping(target = "id", source = "id")
    public abstract GameDto toDtoDelegate(Game entity);

    @Override
    public Game toEntity(GameDto dto) {
        Game game = toEntityDelegate(dto);
        return game;
    }

    @Override
    public GameDto toDto(Game entity) {
        GameDto dto = toDtoDelegate(entity);
        return dto;
    }

}
