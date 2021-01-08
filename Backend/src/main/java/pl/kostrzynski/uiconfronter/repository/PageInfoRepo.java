package pl.kostrzynski.uiconfronter.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.kostrzynski.uiconfronter.model.entity.PageInfo;

@Repository
public interface PageInfoRepo extends JpaRepository<PageInfo,Long> {

}
