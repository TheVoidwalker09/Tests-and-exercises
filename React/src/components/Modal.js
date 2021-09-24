function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  }

  return (
    <div className="modal">
      <p>Estás Seguro?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancelar
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirmar
      </button>
    </div>
  );
}

export default Modal;
