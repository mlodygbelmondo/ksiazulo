package bspl.mapakebabow.v1.Services.impl;

import bspl.mapakebabow.v1.DTOs.PositionDTO;
import bspl.mapakebabow.v1.Entities.Position;
import bspl.mapakebabow.v1.Exceptions.ResourceNotFoundException;
import bspl.mapakebabow.v1.Repositories.PositionRepository;
import bspl.mapakebabow.v1.Repositories.RestaurantRepository;
import bspl.mapakebabow.v1.Services.PositionService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PositionServiceImpl implements PositionService {

    private PositionRepository positionRepository;

    private RestaurantRepository restaurantRepository;
    private ModelMapper modelMapper;

    public PositionServiceImpl(PositionRepository positionRepository, ModelMapper modelMapper, RestaurantRepository restaurantRepository) {
        this.positionRepository = positionRepository;
        this.modelMapper = modelMapper;
        this.restaurantRepository = restaurantRepository;
    }

    @Override
    public PositionDTO createPosition(PositionDTO positionDTO) {
        Position position = modelMapper.map(positionDTO, Position.class);
        Position savedPosition = positionRepository.save(position);

        return modelMapper.map(savedPosition, PositionDTO.class);
    }

    @Override
    public List<PositionDTO> getAllPositions() {
        List<Position> positions = positionRepository.findAll();
        return positions.stream().map((position) -> modelMapper.map(position, PositionDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public PositionDTO updatePosition(PositionDTO positionDTO, Long id) {
        Position position = positionRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Position", "id", id));

        position.setLatitude(positionDTO.getLatitude());
        position.setLongitude(positionDTO.getLongitude());

        Position updatedPosition = positionRepository.save(position);

        return modelMapper.map(updatedPosition, PositionDTO.class);
    }

    @Override
    public PositionDTO getPositionById(Long id) {
        Position position = positionRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Position", "id", id));
        return modelMapper.map(position, PositionDTO.class);
    }

    @Override
    public void deletePosition(Long id) {
        Position position = positionRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Position", "id", id));
        positionRepository.delete(position);
    }

}
