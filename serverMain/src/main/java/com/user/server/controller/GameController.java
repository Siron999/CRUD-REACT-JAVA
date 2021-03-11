package com.user.server.controller;

import com.user.server.service.Dto.GameDto;
import com.user.server.service.GameService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class GameController {

    private final GameService gameService;

    @GetMapping("/games")
    public ResponseEntity<List<GameDto>> getAll(Pageable pageable){

        Page<GameDto> page = gameService.getAll(pageable);

        return ResponseEntity.ok().body(page.getContent());

    }

    @GetMapping("games/{id}")
    public ResponseEntity<Optional<GameDto>> getById(@PathVariable Long id){
        Optional<GameDto> GameDto = gameService.getById(id);
        return ResponseEntity.ok().body(GameDto);
    }

    @DeleteMapping("/games/{id}")
    public ResponseEntity<String> deleteById(@PathVariable Long id){
           String msg= gameService.deleteById(id);
        return ResponseEntity.ok().body(msg);
    }
//

    @PostMapping("/games")
    public ResponseEntity<GameDto> addGame( @RequestBody GameDto gameDto){
            GameDto game = gameService.addGame(gameDto);
            return ResponseEntity.ok().body(game);
    }

    @PutMapping("games")
    public ResponseEntity<GameDto> updateById(@RequestBody GameDto gameDto){
        GameDto updatedGame = gameService.addGame(gameDto);
        return ResponseEntity.ok().body(updatedGame);
    }
}
