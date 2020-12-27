package pl.kostrzynski.uiconfronter.model.entity;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
public class PageInfoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @CreationTimestamp
    @Column(nullable = false)
    private Date createDate;
    @Column(nullable = false)
    private String oldPage;
    @Column(nullable = false)
    private String newPage;

    public PageInfoEntity() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public String getOldPage() {
        return oldPage;
    }

    public void setOldPage(String oldPage) {
        this.oldPage = oldPage;
    }

    public String getNewPage() {
        return newPage;
    }

    public void setNewPage(String newPage) {
        this.newPage = newPage;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PageInfoEntity that = (PageInfoEntity) o;
        return id == that.id &&
                createDate.equals(that.createDate) &&
                oldPage.equals(that.oldPage) &&
                newPage.equals(that.newPage);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, createDate, oldPage, newPage);
    }

    @Override
    public String toString() {
        return "PageInfoEntity{" +
                "id=" + id +
                ", createDate=" + createDate +
                ", oldPage='" + oldPage + '\'' +
                ", newPage='" + newPage + '\'' +
                '}';
    }
}
