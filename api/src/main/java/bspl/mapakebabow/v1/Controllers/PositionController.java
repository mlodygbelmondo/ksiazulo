package bspl.mapakebabow.v1.Controllers;

import bspl.mapakebabow.v1.DTOs.PositionDTO;
import bspl.mapakebabow.v1.Services.PositionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/positions")
public class PositionController {

    private PositionService positionService;

    public PositionController(PositionService positionService) {
        this.positionService = positionService;
    }

    @PostMapping
    public ResponseEntity<PositionDTO> createPosition(@RequestBody PositionDTO positionDTO){
        return new ResponseEntity<>(positionService.createPosition(positionDTO), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<PositionDTO>> getAllPositions(){
        return ResponseEntity.ok(positionService.getAllPositions());
    }

    @PutMapping("/{id}")
    public ResponseEntity<PositionDTO> updatePosition(@RequestBody PositionDTO positionDTO,
                                                      @PathVariable(name = "id") Long id){
        return ResponseEntity.ok(positionService.updatePosition(positionDTO, id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletePosition(@PathVariable(name = "id") Long id){
        positionService.deletePosition(id);
        return ResponseEntity.ok("Position successfully deleted.");
    }
}
