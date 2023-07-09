package bspl.mapakebabow.v1.Repositories;

import bspl.mapakebabow.v1.Entities.Position;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PositionRepository extends JpaRepository<Position, Long> {
}
