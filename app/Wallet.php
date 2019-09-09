<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Currency;

class Wallet extends Model
{
    protected $fillable = ['wallet_id', 'user_id', 'currency_id', 'label', 'keys', 'key_signatures', 'dump'];

    protected $casts = [
        'keys' => 'array', 
        'key_signatures' => 'array', 
        'dump' => 'array'
    ];

    public function scopeAuthUserWallets($query)
    {
        $userId = auth()->user()->id;

        return $query->whereUserId($userId);
    }

    public function currency()
    {
        return $this->belongsTo(Currency::class, 'currency_id');
    }
}