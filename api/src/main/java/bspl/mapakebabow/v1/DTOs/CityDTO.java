package bspl.mapakebabow.v1.DTOs;

import bspl.mapakebabow.v1.Entities.Position;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CityDTO {
    private Long id;
    private String name;
    private Double latitude;
    private Double longitude;
    private int zoom;
}
