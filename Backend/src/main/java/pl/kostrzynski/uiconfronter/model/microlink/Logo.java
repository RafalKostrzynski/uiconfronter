package pl.kostrzynski.uiconfronter.model.microlink;

public class Logo {
    private String url;
    private String type;
    private int size;
    private int height;
    private int width;
    private String size_pretty;

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public String getSize_pretty() {
        return size_pretty;
    }

    public void setSize_pretty(String size_pretty) {
        this.size_pretty = size_pretty;
    }
}
