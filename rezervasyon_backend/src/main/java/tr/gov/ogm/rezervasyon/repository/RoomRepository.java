package tr.gov.ogm.rezervasyon.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tr.gov.ogm.rezervasyon.entity.Room;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {
    boolean existsRoomByRoomType(String roomType);
}
