class CategoryClass {
    constructor(image, name, about, _id) {
        if (_id) {
            this._id = _id;
        }
        this.Image = image;
        this.Name = name;
        this.About = about;
    }
}

module.exports = CategoryClass;