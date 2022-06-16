@extends('layouts.app')

@section('content')
<div class="container">
    <form method="POST" action="{{ route('shops.update', $shop->id) }}" class="my-4">
        @csrf
        @method('PUT')
        <div id="create-shop" title="Editar Tienda"  name={{ $shop->name }} logo={{ $shop->logo }} banner={{ $shop->banner }}></div>
    </form>
</div>
@endsection