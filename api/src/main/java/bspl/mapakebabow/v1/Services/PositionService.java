package bspl.mapakebabow.v1.Services;

import bspl.mapakebabow.v1.DTOs.PositionDTO;
import bspl.mapakebabow.v1.Entities.Position;

import java.util.List;

public interface PositionService {
    PositionDTO createPosition(PositionDTO positionDTO);

    List<PositionDTO> getAllPositions();

    PositionDTO updatePosition(PositionDTO positionDTO, Long id);

    PositionDTO getPositionById(Long id);
    void deletePosition(Long id);

}
