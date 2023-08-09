package bspl.mapakebabow.v1.DTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RestaurantDetailedDTO {
    private Long id;
    private String name;
    private String ytUrl;
    private float rating;
    private String category;
    private String city;
    private String mapUrl;
    private String imgUrl;
}
