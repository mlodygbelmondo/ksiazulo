package bspl.mapakebabow.v1.Controllers;

import bspl.mapakebabow.v1.DTOs.CityDTO;
import bspl.mapakebabow.v1.Services.CityService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/cities")
public class CityController {
    private CityService cityService;

    public CityController(CityService cityService) {
        this.cityService = cityService;
    }

    @PostMapping
    public ResponseEntity<CityDTO> createCity(@RequestBody CityDTO cityDTO){
        return new ResponseEntity<>(cityService.createCity(cityDTO), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<CityDTO>> getAllCities(){
        return ResponseEntity.ok(cityService.getAllCities());
    }

}
