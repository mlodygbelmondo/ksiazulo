package bspl.mapakebabow.v1.DTOs;

import bspl.mapakebabow.v1.Entities.Position;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RestaurantDTO {
    private Long id;
    private String name;
    private String ytUrl;
    private float rating;
    private Long positionId;
}
