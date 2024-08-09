type CategoryProps = {
  title: string;
  _id?: string;
  color: string;
};

export class Category {
  public _id?: string;
  public title?: string;
  public color?: string;

  constructor({ _id, color, title }: CategoryProps) {
    this.title = title;
    this.color = color.toLocaleUpperCase();
    this._id = _id;
  }
}
const category = new Category({
  title: 'title',
  color: '#ff33bb',
});
