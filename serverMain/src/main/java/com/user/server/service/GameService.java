package com.user.server.service;


import com.user.server.entity.Game;
import com.user.server.repo.GameRepository;
import com.user.server.service.Dto.GameDto;

import com.user.server.service.mapper.GameMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class GameService {

  private final GameMapper gameMapper;
  private final GameRepository gameRepository;

    @Transactional(readOnly = true)
    public Page<GameDto> getAll(Pageable pageable){
        return gameRepository.findAll(pageable)
                .map(gameMapper::toDto);

    }

    public Optional<GameDto> getById(Long id){
      return gameRepository.findById(id).map(gameMapper::toDto);
    }

  public String deleteById(Long id){
     gameRepository.deleteById(id);
     return "Deleted";
  }

  public GameDto addGame(GameDto gameDto){
    Game game= gameMapper.toEntity(gameDto);
    game= gameRepository.save(game);
     return gameMapper.toDto(game);
  }

}
