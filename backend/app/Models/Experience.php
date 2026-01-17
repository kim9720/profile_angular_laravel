<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Experience extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['user_id', 'company', 'position', 'duration', 'location', 'description'];

    protected $casts = ['description' => 'array']; // JSON array

    // Belongs to User
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
