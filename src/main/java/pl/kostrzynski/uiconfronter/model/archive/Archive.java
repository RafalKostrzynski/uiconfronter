package pl.kostrzynski.uiconfronter.model.archive;

public class Archive {
    private String timestamp;
    private String url;
    private ArchivedSnapshots archived_snapshots;

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public ArchivedSnapshots getArchived_snapshots() {
        return archived_snapshots;
    }

    public void setArchived_snapshots(ArchivedSnapshots archived_snapshots) {
        this.archived_snapshots = archived_snapshots;
    }
}