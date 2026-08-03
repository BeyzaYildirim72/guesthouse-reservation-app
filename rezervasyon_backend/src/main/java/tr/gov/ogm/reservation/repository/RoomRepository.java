package tr.gov.ogm.reservation.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tr.gov.ogm.reservation.entity.Room;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {
}