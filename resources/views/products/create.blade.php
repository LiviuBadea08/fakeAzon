@extends('layouts.app')

@section('content')
<div class="container">
    <form method="POST" action="{{ route('products.store') }}" class="my-4">
        @csrf
        <input type="hidden" name="shopId" value="{{ $shopId }}">
        <div id="create-product" title="Agregar Producto" name="" description="" price="" picture="" ></div>
    </form>
</div>
@endsection