
interface IButton {
  styles: string
}

export default function Button(props: IButton) {
    const styles = props.styles; 
  
    return (
      <button className={styles}>
        <span>button</span>
      </button>
    );
  }